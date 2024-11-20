describe('Social Media Links', () => {
    const socialLinks = [
      { platform: 'Linkedin', url: 'https://www.linkedin.com/company/evs-broadcast-equipment/' },
      { platform: 'Facebook', url: 'https://www.facebook.com/EVS.Broadcast.Equipment/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/evsequipment/' },
      { platform: 'YouTube', url: 'https://www.youtube.com/channel/UCv7ryjXbO77IkkTnWrfELZQ?view_as=subscriber' }
    ];
  
    socialLinks.forEach(({ platform, url }) => {
      it(`Should navigate to ${platform}`, () => {
        cy.visit('https://evs.com/eu');
        cy.get('#onetrust-reject-all-handler').click()
        cy.scrollTo('bottom')
        cy.contains(platform).should('have.attr', 'href', url);
      });
    });
  });
  