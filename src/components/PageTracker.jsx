import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '../lib/analytics';

// Fires a page-view event on route change (respects consent inside track()).
const PageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    track('$pageview', { path: location.pathname });
  }, [location.pathname]);
  return null;
};

export default PageTracker;
