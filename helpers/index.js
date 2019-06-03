module.exports = {
  /**
   * Gathers all sources from an endpoint
   * @param {array} data data provided
   */
  gatherSources(data, res) {
    let sources = [];
    data.map(item => {
      let source = {
        name: item.name,
        description: item.description,
        url: item.url,
        id: item.id,
        link: '/search/sources/' + item.id
      };
      sources.push(source);
    });
    res.json(sources);
  },
  /**
   * Gathers all stories from an endpoint
   * @param {array} data data provided
   */
  gatherStories(data, res) {
    let stories = [];
    data.forEach(element => {
      stories.push(element);
    });
    res.json(stories);
  }
};
