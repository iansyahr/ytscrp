async function getYouTubeVideoTitle(videoUrl) {
  const response = await fetch(`https://cors.iyariv.workers.dev/?u=${videoUrl}`);
  const html = await response.text();
  const ytInitialPlayerResponse = JSON.parse(html.split('ytInitialPlayerResponse = ')[1].split(`;var meta = document.createElement('meta')`)[0]);
  const ytInitialData = JSON.parse(html.split('ytInitialData = ')[1].split(';</script>')[0])
  const value = {
    ytPlayer: ytInitialPlayerResponse,
    ytData: ytInitialData
  }
  return value;
}

getYouTubeVideoTitle('https://www.youtube.com/watch?v=a1USWlywX1o').then(console.log);
