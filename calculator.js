document.addEventListener("DOMContentLoaded", () => {
  const expressionDisplay = document.getElementById("expressionDisplay");
  const resultDisplay = document.getElementById("resultDisplay");
  const buttons = document.querySelectorAll(".buttons button");

  let expression = "";

  const updateDisplay = () => {
    expressionDisplay.textContent = expression || "0";
    resultDisplay.textContent = expression ? evaluateExpression(expression) : "0";
  };

  const sanitize = (value) => {
    return String(value).replace(/[^0-9.+\-*/^()%eapiqrtlgnsco]/gi, "");
  };

  const prepareExpression = (expr) => {
    let prepared = expr
      .replace(/\bpi\b/g, "Math.PI")
      .replace(/\be\b/g, "Math.E")
      .replace(/\^/g, "**")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/log\(/g, "Math.log10(");

    return sanitize(prepared);
  };

  const evaluateExpression = (expr) => {
    if (!expr) return "0";
    try {
      const prepared = prepareExpression(expr);
      // Prevent unsafe code by allowing only accepted characters and known Math functions
      if (/[^0-9+\-*/().%eMathPIqrtanslg]/.test(prepared)) {
        return "Error";
      }
      const value = new Function(`return ${prepared}`)();
      if (typeof value === "number" && Number.isFinite(value)) {
        return Number.isInteger(value) ? value.toString() : value.toFixed(8).replace(/\.0+$/, "").replace(/(\.\d+?)0+$/, "$1");
      }
      return "Error";
    } catch {
      return "Error";
    }
  };

  const appendValue = (value) => {
    if (value === "clear") {
      expression = "";
      updateDisplay();
      return;
    }

    if (value === "back") {
      expression = expression.slice(0, -1);
      updateDisplay();
      return;
    }

    if (value === "=") {
      const result = evaluateExpression(expression);
      if (result !== "Error") {
        expression = result;
      }
      updateDisplay();
      return;
    }

    expression += value;
    updateDisplay();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (value) appendValue(value);
    });
  });

  updateDisplay();
});
