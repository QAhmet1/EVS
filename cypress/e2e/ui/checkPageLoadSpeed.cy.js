it('Should load homepage within acceptable time', () => {
    cy.visit('https://evs.com/eu', {
      onLoad: (win) => {
        const [navigationEntry] = win.performance.getEntriesByType('navigation');
        
        if (navigationEntry) {
          const loadTime = navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime;
          expect(loadTime).to.be.lessThan(3000); // Load within 3 seconds
        } else {
          throw new Error('Navigation Timing entry is not available');
        }
      },
    });
  });
  
  