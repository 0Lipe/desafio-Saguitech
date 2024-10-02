document
  .getElementById("calculadora")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const valorVenda = document.getElementById("valorVenda").value;
    const itens = document.getElementById("itens").value;
    const irpf = parseFloat(document.getElementById("IRPF").value);
    const pis = parseFloat(document.getElementById("PIS").value);
    const cofins = parseFloat(document.getElementById("COFINS").value);
    const inss = parseFloat(document.getElementById("INSS").value);
    const issqn = parseFloat(document.getElementById("ISSQN").value);

    const irpfTotal = valorVenda * (irpf / 100);
    const pisTotal = valorVenda * (pis / 100);
    const confinsTotal = valorVenda * (cofins / 100);
    const inssTotal = valorVenda * (inss / 100);
    const issqnTotal = valorVenda * (issqn / 100);

    const total = irpfTotal + pisTotal + confinsTotal + inssTotal + issqnTotal;

    document.getElementById("resultValor").textContent = Math.round(valorVenda);
    document.getElementById("resultItens").textContent = itens;
    document.getElementById("resultIRPF").textContent = Math.round(irpfTotal);
    document.getElementById("resultPIS").textContent = Math.round(pisTotal);
    document.getElementById("resultCOFINS").textContent =
      Math.round(confinsTotal);
    document.getElementById("resultINSS").textContent = Math.round(inssTotal);
    document.getElementById("resultISSQN").textContent = Math.round(issqnTotal);
    document.getElementById("resultTotal").textContent = Math.round(total);

    document.getElementById("calculadora").style.display = "none";
    document.getElementById("result").style.display = "flex";
  });

document.getElementById("btn-voltar").onclick = function () {
  document.getElementById("result").style.display = "none";
  document.getElementById("calculadora").style.display = "flex";
};
