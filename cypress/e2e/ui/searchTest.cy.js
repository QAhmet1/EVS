import Homepage from '../../pages/HopePage'

describe('Search Functionality', () => {
    beforeEach(() => {
        Homepage.visit()
      });
    it('Should display relevant results for search queries', () => {
    Homepage.verifySearchFunc('solutions')
    });
  });
  