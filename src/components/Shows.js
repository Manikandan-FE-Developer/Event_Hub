import { useState, useEffect } from 'react';

export default function Shows() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatDistance = distance => {
    return `${Math.round(parseFloat(distance) / 1000)} km`;
  };

  return (
    <div className="show-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        events.map(event => (
          <div key={event.eventName} className="card">
            <div className="card-img">
              <img src={`/images/shows/${event.eventName}.jpg`} alt={event.eventName} />
              <div className="overlay">
                <div>
                  <h5 className="card-title">{event.eventName}</h5>
                  <p className="card-text">{formatDate(event.date)}</p>
                </div>
                <div>
                  <p className="card-text"><i className="fa fa-map-marker mr-1"></i> {event.cityName}</p>
                  <p className="card-text">{event.weather} | {formatDistance(event.distanceKm)}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
