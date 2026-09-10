function calculate() {

    const result = document.getElementById("result");

    const matrixIds = [
        "a11", "a12", "a13", "b1",
        "a21", "a22", "a23", "b2",
        "a31", "a32", "a33", "b3"
    ];

    matrixIds.forEach(id => {
        document.getElementById(id).classList.remove("input-error");
    });

    document.getElementById("tolerance").classList.remove("input-error");
    document.getElementById("maxIterations").classList.remove("input-error");


    // CHECK EMPTY INPUTS

    let emptyFields = [];

    matrixIds.forEach(id => {

        const input = document.getElementById(id);

        if (input.value.trim() === "") {
            emptyFields.push(id);
            input.classList.add("input-error");
        }

    });

    if (emptyFields.length > 0) {

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>⚠ Input Required</h2>
                <p>Please fill in all coefficient and constant values.</p>
            </div>
        `;

        return;
    }


    // GET VALUES

    const a11 = Number(document.getElementById("a11").value);
    const a12 = Number(document.getElementById("a12").value);
    const a13 = Number(document.getElementById("a13").value);
    const b1 = Number(document.getElementById("b1").value);

    const a21 = Number(document.getElementById("a21").value);
    const a22 = Number(document.getElementById("a22").value);
    const a23 = Number(document.getElementById("a23").value);
    const b2 = Number(document.getElementById("b2").value);

    const a31 = Number(document.getElementById("a31").value);
    const a32 = Number(document.getElementById("a32").value);
    const a33 = Number(document.getElementById("a33").value);
    const b3 = Number(document.getElementById("b3").value);


    // VALID NUMBERS

    const values = [
        a11, a12, a13, b1,
        a21, a22, a23, b2,
        a31, a32, a33, b3
    ];

    if (values.some(value => !Number.isFinite(value))) {

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>⚠ Invalid Input</h2>
                <p>Please enter valid numerical values only.</p>
            </div>
        `;

        return;
    }


    // ZERO DIAGONAL

    const diagonalIds = ["a11", "a22", "a33"];
    const diagonalValues = [a11, a22, a33];

    let zeroDiagonal = false;

    for (let i = 0; i < diagonalValues.length; i++) {

        if (diagonalValues[i] === 0) {

            document
                .getElementById(diagonalIds[i])
                .classList.add("input-error");

            zeroDiagonal = true;
        }
    }

    if (zeroDiagonal) {

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>✕ Invalid Matrix</h2>

                <p>
                    The diagonal coefficients
                    <strong>a₁₁, a₂₂, a₃₃</strong>
                    cannot be zero for the Gauss-Seidel method.
                </p>
            </div>
        `;

        return;
    }


    // INITIAL VALUES

    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let x3 = Number(document.getElementById("x3").value);


    if (
        !Number.isFinite(x1) ||
        !Number.isFinite(x2) ||
        !Number.isFinite(x3)
    ) {

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>⚠ Invalid Initial Values</h2>
                <p>Please enter valid numbers for x₁, x₂ and x₃.</p>
            </div>
        `;

        return;
    }


    // SETTINGS

    const toleranceInput = document.getElementById("tolerance");
    const maxIterationsInput = document.getElementById("maxIterations");

    const tolerance = Number(toleranceInput.value);
    const maxIterations = Number(maxIterationsInput.value);


    if (!Number.isFinite(tolerance) || tolerance <= 0) {

        toleranceInput.classList.add("input-error");

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>✕ Invalid Tolerance</h2>
                <p>Tolerance must be greater than zero.</p>
            </div>
        `;

        return;
    }


    if (
        !Number.isInteger(maxIterations) ||
        maxIterations < 1 ||
        maxIterations > 10000
    ) {

        maxIterationsInput.classList.add("input-error");

        result.innerHTML = `
            <div class="status-card error-card">
                <h2>✕ Invalid Iteration Limit</h2>

                <p>
                    Maximum iterations must be an integer
                    between <strong>1</strong> and
                    <strong>10,000</strong>.
                </p>
            </div>
        `;

        return;
    }


    // DIAGONAL DOMINANCE

    const row1Dominant =
        Math.abs(a11) > Math.abs(a12) + Math.abs(a13);

    const row2Dominant =
        Math.abs(a22) > Math.abs(a21) + Math.abs(a23);

    const row3Dominant =
        Math.abs(a33) > Math.abs(a31) + Math.abs(a32);

    const diagonallyDominant =
        row1Dominant &&
        row2Dominant &&
        row3Dominant;


    // SYSTEM CHECK

    let systemCheck = "";

    if (diagonallyDominant) {

        systemCheck = `
            <div class="status-card success-card">

                <h2>✓ System Check</h2>

                <p>✓ All input values are valid</p>
                <p>✓ No zero diagonal coefficients</p>
                <p>✓ Matrix is diagonally dominant</p>

                <div class="status-good">
                    ● Good conditions for convergence
                </div>

            </div>
        `;

    } else {

        systemCheck = `
            <div class="status-card warning-card">

                <h2>⚠ System Check</h2>

                <p>✓ All input values are valid</p>
                <p>✓ No zero diagonal coefficients</p>
                <p>⚠ Matrix is not strictly diagonally dominant</p>

                <div class="status-warning">
                    ● Convergence is not guaranteed
                </div>

            </div>
        `;
    }


    // START OUTPUT

    let output = systemCheck;

    let iterationRows = "";

    let converged = false;
    let convergenceIteration = 0;


    // GAUSS-SEIDEL

    for (let i = 1; i <= maxIterations; i++) {

        const oldX1 = x1;
        const oldX2 = x2;
        const oldX3 = x3;


        x1 = (b1 - a12 * x2 - a13 * x3) / a11;

        x2 = (b2 - a21 * x1 - a23 * x3) / a22;

        x3 = (b3 - a31 * x1 - a32 * x2) / a33;


        if (
            !Number.isFinite(x1) ||
            !Number.isFinite(x2) ||
            !Number.isFinite(x3)
        ) {

            output += `
                <div class="status-card error-card">
                    <h2>✕ Calculation Failed</h2>

                    <p>
                        The iteration produced an invalid
                        numerical result.
                        This system may not converge using
                        Gauss-Seidel.
                    </p>
                </div>
            `;

            result.innerHTML = output;

            return;
        }


        const error = Math.max(
            Math.abs(x1 - oldX1),
            Math.abs(x2 - oldX2),
            Math.abs(x3 - oldX3)
        );


        iterationRows += `
            <tr>
                <td>${i}</td>
                <td>${x1.toFixed(6)}</td>
                <td>${x2.toFixed(6)}</td>
                <td>${x3.toFixed(6)}</td>
                <td>${error.toFixed(6)}</td>
            </tr>
        `;


        if (error < tolerance) {

            converged = true;
            convergenceIteration = i;

            break;
        }
    }


    // COLLAPSIBLE ITERATIONS

    output += `
        <div class="iterations-section">

            <button
                class="iterations-toggle"
                onclick="toggleIterations()"
            >
                <span id="iterationsArrow">▶</span>

                <span>
                    View Iterations
                    (${converged
                        ? convergenceIteration
                        : maxIterations} iterations)
                </span>
            </button>


            <div
                id="iterationsPanel"
                class="iterations-panel"
            >

                <table>

                    <tr>
                        <th>Iteration</th>
                        <th>x₁</th>
                        <th>x₂</th>
                        <th>x₃</th>
                        <th>Error</th>
                    </tr>

                    ${iterationRows}

                </table>

            </div>

        </div>
    `;


    // SOLUTION

    if (converged) {

        output += `
            <div class="solution-card">

                <div class="solution-header">

                    <span class="solution-icon">
                        ✓
                    </span>

                    <div>

                        <div class="solution-title">
                            Converged
                        </div>

                        <div class="solution-subtitle">
                            Solution found in
                            ${convergenceIteration} iterations
                        </div>

                    </div>

                </div>


                <div class="solution-values">

                    <div>
                        <span>x₁</span>
                        <strong>${x1.toFixed(6)}</strong>
                    </div>

                    <div>
                        <span>x₂</span>
                        <strong>${x2.toFixed(6)}</strong>
                    </div>

                    <div>
                        <span>x₃</span>
                        <strong>${x3.toFixed(6)}</strong>
                    </div>

                </div>

            </div>
        `;

    } else {

        output += `
            <div class="status-card warning-card">

                <h2>⚠ Maximum Iterations Reached</h2>

                <p>
                    The method did not reach the selected
                    tolerance within ${maxIterations} iterations.
                </p>

                <div class="status-warning">
                    ● Try a different initial guess,
                    tolerance, or check the matrix
                    for convergence.
                </div>

            </div>
        `;
    }


    result.innerHTML = output;
}


// ==========================================
// INFO PANEL
// ==========================================

function toggleInfo() {

    const infoPanel =
        document.getElementById("infoPanel");

    infoPanel.classList.toggle("show");
}


// ==========================================
// ITERATIONS DROPDOWN
// ==========================================

function toggleIterations() {

    const panel =
        document.getElementById("iterationsPanel");

    const arrow =
        document.getElementById("iterationsArrow");

    panel.classList.toggle("show");

    if (panel.classList.contains("show")) {
        arrow.textContent = "▼";
    } else {
        arrow.textContent = "▶";
    }
}