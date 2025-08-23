// components/DiscordPresence.tsx
import { useEffect, useState } from 'react';

interface DiscordUser {
  id: string;
  username: string;
  global_name?: string;
  avatar: string;
}

interface Activity {
  type: number;
  name: string;
  details?: string;
  state?: string;
  timestamps?: {
    start: number;
  };
}

interface DiscordData {
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
  listening_to_spotify: boolean;
}

const DiscordPresence = () => {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [loading, setLoading] = useState(true);

  // Your Discord User ID
  const DISCORD_ID = '1011633957172940871';

  useEffect(() => {
    let websocket: WebSocket | null = null;

    const initWebSocket = () => {
      try {
        websocket = new WebSocket('wss://api.lanyard.rest/socket');

        websocket.onopen = () => {
          console.log('Connected to Lanyard WebSocket');
          
          websocket.send(JSON.stringify({
            op: 2,
            d: {
              subscribe_to_ids: [DISCORD_ID]
            }
          }));

          setLoading(false);
        };

        websocket.onmessage = (event) => {
          try {
            const { t, d } = JSON.parse(event.data);
            
            if (t === 'INIT_STATE' || t === 'PRESENCE_UPDATE') {
              if (d && d[DISCORD_ID]) {
                setDiscordData(d[DISCORD_ID]);
              } else if (d) {
                setDiscordData(d);
              }
            }
          } catch (err) {
            console.error('Error parsing WebSocket message:', err);
          }
        };

        websocket.onerror = (err) => {
          console.error('WebSocket error:', err);
          setLoading(false);
        };

        websocket.onclose = () => {
          console.log('WebSocket disconnected');
          setTimeout(initWebSocket, 5000);
        };
      } catch (err) {
        console.error('Failed to connect to WebSocket:', err);
        setLoading(false);
      }
    };

    initWebSocket();

    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-[2px] rounded-xl border border-white/20 shadow-lg">
        <p className="text-black">Connecting to Discord...</p>
      </div>
    );
  }

  if (!discordData) {
    return (
      <div className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-[2px] rounded-xl border border-white/20 shadow-lg">
        <p className="text-black text-sm">Discord presence not available</p>
      </div>
    );
  }

  const { discord_user, activities = [] } = discordData;
  
  const customStatus = activities.find(activity => activity.type === 3 || activity.type === 4);
  const otherActivities = activities.filter(activity => activity.type !== 3 && activity.type !== 4);

  return (
    <div className="w-full animate-scale-up">
      {/* Transparent with minimal blur and black text */}
      <div className="bg-white/10 backdrop-blur-[2px] rounded-2xl border border-white/20 shadow-xl overflow-hidden">
        <div className="p-6">
          {/* Avatar and info - More prominent */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-shrink-0">
              {discord_user?.avatar ? (
                <img 
                  src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`} 
                  alt="Discord Avatar"
                  className="w-16 h-16 rounded-full border-2 border-white/30 shadow-sm"
                />
              ) : (
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <span className="text-2xl font-bold text-black">
                    {discord_user?.username?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h1 className="text-black font-bold text-xl truncate">
                {discord_user?.global_name || discord_user?.username}
              </h1>
              <p className="text-black/80 flex items-center gap-1">
                <span className="text-green-500">●</span>
                Online
              </p>
            </div>
          </div>

          {/* Activities - Clear presentation with black text */}
          <div className="space-y-3">
            {customStatus && (
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-[1px] border border-white/10">
                <p className="text-black font-medium truncate">{customStatus.name}</p>
                {customStatus.details && (
                  <p className="text-black/90 text-sm mt-1">{customStatus.details}</p>
                )}
                {customStatus.state && (
                  <p className="text-black/70 text-sm mt-1">{customStatus.state}</p>
                )}
              </div>
            )}

            {otherActivities.map((activity, index) => (
              <div key={index} className="bg-white/10 p-3 rounded-lg backdrop-blur-[1px] border border-white/10">
                <p className="text-black font-medium truncate">{activity.name}</p>
                {activity.details && (
                  <p className="text-black/90 text-sm mt-1">{activity.details}</p>
                )}
                {activity.state && (
                  <p className="text-black/70 text-sm mt-1">{activity.state}</p>
                )}
              </div>
            ))}

            {!customStatus && otherActivities.length === 0 && (
              <p className="text-black/60 text-center py-4">No current activity</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordPresence;