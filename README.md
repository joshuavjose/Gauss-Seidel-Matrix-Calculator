# 🧮 Gauss-Seidel Calculator

> A small numerical-methods project that turns a little bit of matrix madness into a clean, interactive calculation. ✨

Welcome! 👋

This is a web-based **3 × 3 Gauss-Seidel Calculator** built to make solving systems of linear equations easier to understand, visualize, and experiment with.

Instead of throwing a bunch of calculations at you, the calculator also lets you peek into the iterations and see how the solution gradually approaches its final value. 🔢

---

## 🚀 What Can It Do?

The calculator comes with a few useful tricks:

- 🧮 Solve **3 × 3 systems of linear equations**
- 🎯 Set your own **initial values**
- 🔧 Adjust the **convergence tolerance**
- 🔁 Choose the **maximum number of iterations**
- 📊 View the complete **iteration table**
- ✅ Detect whether the system has good convergence conditions
- ⚠️ Check for **diagonal dominance**
- 🚫 Detect zero diagonal coefficients
- 🛡️ Validate user input
- 📱 Responsive interface for smaller screens
- 🌙 Dark, modern mathematical dashboard UI

The iteration table is tucked away behind **"View Iterations"**, so your screen doesn't get absolutely destroyed by 500 rows of numbers. 😂

---

## 🧠 The Mathematics Behind It

The **Gauss-Seidel method** is an iterative technique used to approximate the solution of a system of linear equations.

For a system:

```text
a₁₁x₁ + a₁₂x₂ + a₁₃x₃ = b₁
a₂₁x₁ + a₂₂x₂ + a₂₃x₃ = b₂
a₃₁x₁ + a₃₂x₂ + a₃₃x₃ = b₃
