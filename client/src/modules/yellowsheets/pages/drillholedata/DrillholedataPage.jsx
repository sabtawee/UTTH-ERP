import React, { useState, useEffect } from 'react';
import DrillholeHeader from './components/DrillholeHeader';
import DrillholeMenuCards from './components/DrillholeMenuCards';
import DrillholeNotice from './components/DrillholeNotice';
import DrillholeStats from './components/DrillholeStats';

export default function DrillholedataPage() {
  const [statsData, setStatsData] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    lastUpdated: '-'
  });

  // TODO: Fetch real data from API
  useEffect(() => {
    // Example: fetchDrillholeStats().then(setStatsData);
  }, []);

  return (
    <div className="min-h-screen p-6">
      <DrillholeHeader />
      <DrillholeMenuCards />
      <DrillholeNotice />
    </div>
  );
}
