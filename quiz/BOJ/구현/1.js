const play_list = [2, 3, 1, 4];
const listen_time = 3;

function solution(play_list, listen_time) {
  const totalTime = play_list.reduce((acc, cur) => acc + cur, 0);

  if (totalTime <= listen_time) {
    return play_list.length;
  }

  let start = 0;
  let end = listen_time.length - 1;
  let time = 3;

  for (let i = 0; i < play_list.length; i++) {
    while (time < listen_time) {
      time += play_list[end++ % play_list.length];
      songs += 1;
      result = Math.max(result, songs);
    }

    console.log({ time, songs, result });

    time -= play_list[i];
    songs -= 1;
  }

  return result;
}

console.log(solution(play_list, listen_time));
