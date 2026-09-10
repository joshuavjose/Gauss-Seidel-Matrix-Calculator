function calculate() {

    // Get matrix values
    const a11 = Number(document.getElementById("a11").value);
    const a12 = Number(document.getElementById("a12").value);
    const a13 = Number(document.getElementById("a13").value);
    const b1  = Number(document.getElementById("b1").value);

    const a21 = Number(document.getElementById("a21").value);
    const a22 = Number(document.getElementById("a22").value);
    const a23 = Number(document.getElementById("a23").value);
    const b2  = Number(document.getElementById("b2").value);

    const a31 = Number(document.getElementById("a31").value);
    const a32 = Number(document.getElementById("a32").value);
    const a33 = Number(document.getElementById("a33").value);
    const b3  = Number(document.getElementById("b3").value);

    // Initial values
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let x3 = Number(document.getElementById("x3").value);

    const tolerance = Number(document.getElementById("tolerance").value);
    const maxIterations = Number(document.getElementById("maxIterations").value);

    let output = `
        <h2>Iterations</h2>
        <table>
            <tr>
                <th>Iteration</th>
                <th>x₁</th>
                <th>x₂</th>
                <th>x₃</th>
                <th>Error</th>
            </tr>
    `;

    for (let i = 1; i <= maxIterations; i++) {

        // Save old values
        let oldX1 = x1;
        let oldX2 = x2;
        let oldX3 = x3;

        // Gauss-Seidel formulas
        x1 = (b1 - a12 * x2 - a13 * x3) / a11;

        x2 = (b2 - a21 * x1 - a23 * x3) / a22;

        x3 = (b3 - a31 * x1 - a32 * x2) / a33;

        // Calculate maximum change
        let error = Math.max(
            Math.abs(x1 - oldX1),
            Math.abs(x2 - oldX2),
            Math.abs(x3 - oldX3)
        );

        output += `
            <tr>
                <td>${i}</td>
                <td>${x1.toFixed(6)}</td>
                <td>${x2.toFixed(6)}</td>
                <td>${x3.toFixed(6)}</td>
                <td>${error.toFixed(6)}</td>
            </tr>
        `;

        // Stop when tolerance is reached
        if (error < tolerance) {
            output += `</table>
                <h2>Solution</h2>
                <p>x₁ = ${x1.toFixed(6)}</p>
                <p>x₂ = ${x2.toFixed(6)}</p>
                <p>x₃ = ${x3.toFixed(6)}</p>
                <p>Converged in ${i} iterations.</p>
            `;

            document.getElementById("result").innerHTML = output;
            return;
        }
    }

    output += `</table>
        <p>Maximum iterations reached without convergence.</p>
    `;

    document.getElementById("result").innerHTML = output;
}