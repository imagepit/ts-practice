{
  const input = require("prompt-sync")({ sigint: true });
  const title = input("タイトルを入力:");
  const contents = input("内容を入力:");
  const progressRate = parseInt(input("進捗率を入力:"));
  const todo: { 
    title: string; 
    contents: string; 
    progressRate: number 
  } = {
    title : "TODOのタイトル",
    contents : "TODOの内容",
    progressRate : 40
  }
  // スプレッド構文を使って、入力された値を使ってtodoを元に新しいオブジェクトを作成する
  // 未入力だった場合には元の値を使う
  const newTodo = {
    // ...todo,
    title: title || todo.title,
    contents: contents || todo.contents,
    progressRate: progressRate || todo.progressRate
  }
  // 作成した新しいオブジェクトを出力する
  console.log("元のオブジェクト:");
  console.log(todo);
  console.log("新しいオブジェクト:");
  console.log(newTodo);
}