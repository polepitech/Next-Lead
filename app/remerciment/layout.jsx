import React, { Suspense } from 'react';
import Page from '../test-technique/Page';

export default function RemercimentWrapper() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <Page />
    </Suspense>
  );
}