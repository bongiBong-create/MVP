import { jsPDF } from "jspdf";

export const ButtonPdf = () => {
  const saveAsPDF = () => {
    const doc = new jsPDF();

    // Используем метод html для захвата содержимого страницы
    doc.html(document.getElementById("graphic"), {
      callback: function (doc) {
        doc.save("page.pdf"); // Сохраняем PDF с именем "page.pdf"
      },
      html2canvas: {
        scale: 0.25, // Уменьшаем масштаб в два раза
      },
    });
  };

  return <button style={{padding: "5px 10px"}} onClick={saveAsPDF}>Сохранить графики как PDF</button>;
};
