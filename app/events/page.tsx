'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/lib/supabaseClient';
import EventCard from '@/components/EventCard';
import Loading from '@/components/Loading';

// Define valid tier values
type Tier = 'free' | 'silver' | 'gold' | 'platinum';

// Define Event type structure
interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: Tier;
}

const EventsPage: React.FC = () => {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;

    const tierLevels: Tier[] = ['free', 'silver', 'gold', 'platinum'];
    const userTier = (user?.publicMetadata?.tier ?? 'free') as Tier;

    const allowedTiers = tierLevels.slice(0, tierLevels.indexOf(userTier) + 1);

    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .in('tier', allowedTiers)
        .order('event_date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error.message);
      } else {
        setEvents((data as Event[]) || []);
      }
      setLoading(false);
    }

    fetchEvents();
  }, [user, isLoaded]);

  if (!isLoaded || loading) return <Loading />;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">
          No events available for your tier.
        </p>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
};

export default EventsPage;
