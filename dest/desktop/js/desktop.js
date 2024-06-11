(() => {
  // indent will be adjusted, force semi
  'use strict';

  kintone.events.on('app.record.index.show', (e) => {
    // var will be changed to const
    const message = 'this is a message from new commit';

    // not automatically fixed
    const unusedVar = null;

    // let will be changed to const
    const nestedObject = {
      nama: 'aulya',
      pets: [
        { type: 'cat', name: 'leah' },
        { type: 'cat', name: 'sean' },
        { type: 'dog', name: 'dogi' },
        { type: 'bird', name: 'birdi' },
        { type: 'snake', name: 'sneki' },
        { type: 'lion', name: 'simba' },
      ],
    };

    // var will be changed to const
    const anotherMessage =
      'this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message';

    console.log(nestedObject);
    alert(message);
    alert(anotherMessage);
  });
})();
