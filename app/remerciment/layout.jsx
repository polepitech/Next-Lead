import React, { Suspense } from 'react';
import Remerciment from './page';

export default function RemercimentWrapper() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <Remerciment />
    </Suspense>
  );
}