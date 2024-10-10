export default function shareTextDone(text, setTextShare, type = "metrics") {
  let result = "\n\n";
  text.forEach((item) => {
    // Удаляем номер из начала названия и пробелы
    const name = item.name.replace(/^\d+\./, "").trim();
    result += `${name}: ||${
      type === "metrics" ? item.score : item.description
    }||\n`;
  });
  setTextShare(result);
}
