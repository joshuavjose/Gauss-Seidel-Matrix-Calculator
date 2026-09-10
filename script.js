/* ==========================================
   GENERAL
========================================== */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;

    font-family: Arial, sans-serif;

    background:
        radial-gradient(
            circle at top,
            #21134a 0%,
            #0b0920 45%,
            #050510 100%
        );

    color: #ffffff;
}


/* ==========================================
   MAIN CONTAINER
========================================== */

.container {
    width: min(900px, 92%);

    margin: 40px auto;

    padding: 35px;

    background: rgba(15, 12, 35, 0.88);

    border: 1px solid rgba(150, 120, 255, 0.25);

    border-radius: 20px;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(100, 60, 255, 0.08);

    backdrop-filter: blur(10px);
}


/* ==========================================
   TOP BAR
========================================== */

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}


/* ==========================================
   TITLE
========================================== */

h1 {
    margin-top: 0;
    margin-bottom: 8px;

    font-size: 32px;

    /* OLD GRADIENT TITLE */
    background:
        linear-gradient(
            90deg,
            #a78bfa,
            #6366f1,
            #38bdf8
        );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;

    font-weight: 800;
}

h2 {
    margin-top: 32px;
    margin-bottom: 15px;

    font-size: 20px;
}

h3 {
    margin-bottom: 8px;
}

p {
    color: #bdb8d6;

    line-height: 1.6;
}


/* ==========================================
   INFO BUTTON
========================================== */

.info-button {
    width: auto;
    min-width: 85px;

    padding: 10px 16px;

    background:
        rgba(120, 80, 255, 0.12);

    border:
        1px solid rgba(150, 120, 255, 0.35);

    border-radius: 10px;

    color: #ffffff;

    font-size: 14px;

    cursor: pointer;

    transition: 0.25s ease;
}

.info-button:hover {
    background:
        rgba(120, 80, 255, 0.25);

    border-color:
        rgba(170, 140, 255, 0.7);

    transform: translateY(-2px);

    box-shadow:
        0 5px 20px rgba(100, 70, 255, 0.2);
}

.info-button:active {
    transform: translateY(0);
}


/* ==========================================
   INFO PANEL
========================================== */

.info-panel {
    display: none;

    margin-top: 18px;

    padding: 20px;

    background:
        rgba(25, 20, 50, 0.8);

    border:
        1px solid rgba(140, 110, 255, 0.35);

    border-radius: 14px;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.25);
}

.info-panel.show {
    display: block;

    animation:
        infoDrop 0.25s ease;
}

@keyframes infoDrop {

    from {
        opacity: 0;
        transform: translateY(-8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

.info-panel h2 {
    margin-top: 0;
}

.info-panel h3 {
    margin-top: 20px;

    color: #ffffff;
}

.info-panel p {
    margin-bottom: 10px;
}

.info-panel ul {
    padding-left: 20px;

    color: #bdb8d6;

    line-height: 1.8;
}

.info-note {
    opacity: 0.7;

    font-size: 13px;
}

.version {
    opacity: 0.45;

    font-size: 12px;
}


/* ==========================================
   MATRIX
========================================== */

.matrix {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr)
        40px
        1fr;

    gap: 12px;

    align-items: center;

    max-width: 650px;

    margin: auto;
}

.matrix span {
    text-align: center;

    font-size: 22px;

    color: #aaa3c7;
}


/* ==========================================
   INPUTS
========================================== */

input {
    width: 100%;

    padding: 12px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(150, 120, 255, 0.25);

    border-radius: 9px;

    color: #ffffff;

    font-size: 15px;

    outline: none;

    transition: 0.2s ease;
}

input::placeholder {
    color: #77718f;
}

input:focus {
    border-color:
        rgba(160, 120, 255, 0.8);

    background:
        rgba(120, 80, 255, 0.08);

    box-shadow:
        0 0 12px rgba(120, 80, 255, 0.15);
}


/* ==========================================
   INVALID INPUT
========================================== */

input.input-error {
    border-color:
        #ff4d6d !important;

    box-shadow:
        0 0 12px rgba(255, 77, 109, 0.25);
}


/* ==========================================
   INITIAL VALUES
========================================== */

.initial {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}

.initial label {
    display: flex;

    flex-direction: column;

    gap: 7px;

    color: #aaa3c7;
}


/* ==========================================
   SETTINGS
========================================== */

.settings {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;

    margin-top: 25px;
}

.settings label {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    color: #aaa3c7;
}

.settings input {
    max-width: 180px;
}


/* ==========================================
   CALCULATE BUTTON
========================================== */

.container > button:not(.info-button) {
    width: 100%;

    margin-top: 30px;

    padding: 14px;

    border: none;

    border-radius: 11px;

    background:
        linear-gradient(
            135deg,
            #6d42ff,
            #3d6cff
        );

    color: #ffffff;

    font-size: 16px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.25s ease;
}

.container > button:not(.info-button):hover {
    transform: translateY(-2px);

    box-shadow:
        0 8px 25px rgba(80, 70, 255, 0.3);
}

.container > button:not(.info-button):active {
    transform: translateY(0);
}


/* ==========================================
   RESULT
========================================== */

#result {
    margin-top: 35px;
}


/* ==========================================
   STATUS CARDS
========================================== */

.status-card {
    margin-top: 25px;

    padding: 20px;

    border-radius: 14px;

    background:
        rgba(255, 255, 255, 0.04);

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.status-card h2 {
    margin-top: 0;
}

.status-card p {
    margin: 7px 0;
}


/* ==========================================
   ERROR
========================================== */

.error-card {
    border-color:
        rgba(255, 77, 109, 0.35);

    background:
        rgba(255, 77, 109, 0.06);
}

.error-card h2 {
    color: #ff7189;
}


/* ==========================================
   WARNING
========================================== */

.warning-card {
    border-color:
        rgba(255, 190, 70, 0.35);

    background:
        rgba(255, 190, 70, 0.05);
}

.warning-card h2 {
    color: #ffc857;
}


/* ==========================================
   SUCCESS
========================================== */

.success-card {
    border-color:
        rgba(100, 220, 160, 0.3);

    background:
        rgba(100, 220, 160, 0.05);
}

.success-card h2 {
    color: #72e0a5;
}


/* ==========================================
   STATUS MESSAGES
========================================== */

.status-good {
    margin-top: 15px;

    padding: 10px 12px;

    border-radius: 8px;

    background:
        rgba(100, 220, 160, 0.08);

    color: #72e0a5;

    font-size: 13px;
}

.status-warning {
    margin-top: 15px;

    padding: 10px 12px;

    border-radius: 8px;

    background:
        rgba(255, 190, 70, 0.08);

    color: #ffc857;

    font-size: 13px;
}


/* ==========================================
   ITERATIONS DROPDOWN
========================================== */

.iterations-section {
    margin-top: 25px;
}


/* DROPDOWN BUTTON */

.iterations-toggle {
    width: 100% !important;

    margin: 0 !important;

    padding: 14px 18px;

    display: flex;

    align-items: center;

    gap: 10px;

    text-align: left;

    background:
        rgba(120, 80, 255, 0.08) !important;

    border:
        1px solid rgba(140, 110, 255, 0.25) !important;

    border-radius: 11px;

    color: #ffffff;

    font-size: 14px;

    cursor: pointer;

    box-shadow: none !important;

    transform: none !important;

    transition: 0.25s ease;
}

.iterations-toggle:hover {
    background:
        rgba(120, 80, 255, 0.16) !important;

    border-color:
        rgba(160, 130, 255, 0.5) !important;
}

.iterations-toggle:active {
    transform: none !important;
}


/* ARROW */

#iterationsArrow {
    width: 12px;

    color: #a992ff;

    font-size: 12px;
}


/* ==========================================
   ITERATIONS PANEL
========================================== */

/*
   HIDDEN BY DEFAULT.
   JavaScript adds .show when clicked.
*/

.iterations-panel {
    display: none !important;

    margin-top: 12px;
}


/* OPEN */

.iterations-panel.show {
    display: block !important;

    overflow-x: auto;

    animation:
        iterationsDrop 0.25s ease;
}

@keyframes iterationsDrop {

    from {
        opacity: 0;

        transform:
            translateY(-6px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}


/* ==========================================
   ITERATION TABLE
========================================== */

.iterations-panel table {
    width: 100%;

    margin-top: 0;

    border-collapse: collapse;

    border-radius: 12px;

    background:
        rgba(255, 255, 255, 0.03);
}

th,
td {
    padding: 12px;

    text-align: center;

    border-bottom:
        1px solid rgba(255, 255, 255, 0.07);
}

th {
    color: #c9c2e8;

    background:
        rgba(120, 80, 255, 0.12);
}

td {
    color: #aaa3c7;
}

tr:last-child td {
    border-bottom: none;
}


/* ==========================================
   SOLUTION CARD
========================================== */

.solution-card {
    margin-top: 25px;

    padding: 22px;

    border-radius: 16px;

    background:
        linear-gradient(
            135deg,
            rgba(100, 70, 255, 0.12),
            rgba(50, 100, 255, 0.08)
        );

    border:
        1px solid rgba(130, 110, 255, 0.35);

    box-shadow:
        0 10px 35px rgba(60, 50, 180, 0.12);
}


/* ==========================================
   SOLUTION HEADER
========================================== */

.solution-header {
    display: flex;

    align-items: center;

    gap: 13px;
}

.solution-icon {
    display: flex;

    align-items: center;

    justify-content: center;

    width: 35px;

    height: 35px;

    border-radius: 50%;

    background:
        rgba(100, 220, 160, 0.12);

    color: #72e0a5;

    font-weight: bold;
}

.solution-title {
    font-size: 18px;

    font-weight: bold;
}

.solution-subtitle {
    margin-top: 3px;

    color: #9992b8;

    font-size: 13px;
}


/* ==========================================
   SOLUTION VALUES
========================================== */

.solution-values {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 12px;

    margin-top: 22px;
}

.solution-values > div {
    padding: 15px;

    border-radius: 10px;

    background:
        rgba(255, 255, 255, 0.04);

    text-align: center;
}

.solution-values span {
    display: block;

    margin-bottom: 6px;

    color: #9992b8;

    font-size: 13px;
}

.solution-values strong {
    font-size: 18px;
}


/* ==========================================
   FOOTER
========================================== */

footer {
    margin-top: 40px;

    padding-bottom: 5px;

    text-align: center;

    font-size: 11px;

    color: #aaa3c7;

    opacity: 0.45;

    letter-spacing: 0.3px;
}


/* ==========================================
   MOBILE
========================================== */

@media (max-width: 650px) {

    .container {
        padding: 22px;

        margin: 20px auto;
    }

    h1 {
        font-size: 27px;
    }

    .top-bar {
        flex-direction: column;
    }

    .info-button {
        align-self: flex-end;
    }

    .matrix {
        grid-template-columns:
            repeat(3, 1fr)
            25px
            1fr;

        gap: 7px;
    }

    .initial {
        grid-template-columns: 1fr;
    }

    .settings {
        grid-template-columns: 1fr;
    }

    .settings label {
        flex-direction: column;

        align-items: flex-start;
    }

    .settings input {
        max-width: none;
    }

    .solution-values {
        grid-template-columns: 1fr;
    }

    table {
        font-size: 13px;
    }

    th,
    td {
        padding: 8px 4px;
    }

}
