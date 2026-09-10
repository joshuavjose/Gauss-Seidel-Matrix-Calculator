# 🧮 Gauss-Seidel Calculator

> A simple interactive web calculator for solving 3 × 3 systems of linear equations using the **Gauss-Seidel iterative method**. 🚀

## ✨ Features

- 🧮 Solves 3 × 3 linear equation systems
- 🎯 Custom initial values
- 🔧 Adjustable tolerance
- 🔁 Adjustable maximum iterations
- 📊 Expandable iteration table
- ✅ Input validation
- ⚠️ Diagonal dominance & convergence checking
- 🌙 Modern dark-themed UI
- 📱 Responsive design

## 🧠 How It Works

For a system:

```text
a₁₁x₁ + a₁₂x₂ + a₁₃x₃ = b₁
a₂₁x₁ + a₂₂x₂ + a₂₃x₃ = b₂
a₃₁x₁ + a₃₂x₂ + a₃₃x₃ = b₃
```

Gauss-Seidel rearranges the equations and repeatedly updates:

```text
x₁ → x₂ → x₃ → error check → repeat
```

The calculation stops when the error becomes smaller than the selected tolerance.

## 🎮 How To Use

1. Enter the coefficient matrix and constants.
2. Enter initial values for x₁, x₂ and x₃.
3. Set the tolerance and maximum iterations.
4. Click **Calculate**.
5. View the final solution and, if needed, expand **View Iterations**.

## 📁 Project Structure

```text
gauss-seidel-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🛠️ Built With

- 🌐 HTML5
- 🎨 CSS3
- ⚡ JavaScript
- ☁️ GitHub Pages

No external libraries or frameworks are required.

## 🎓 Purpose

This project was created to explore how a mathematical numerical method can be turned into an interactive web application while making the iteration process easy to understand.

## 🔮 Future Ideas

- 📊 Convergence graphs
- 🧮 Larger matrices
- 🔄 Automatic row rearrangement
- 📋 Copy/export results
- 🧠 Additional numerical methods

## 👨‍💻 Author

**Joshua V Jose**  
B.Tech CSE (AI/ML)

Built with mathematics, JavaScript, curiosity, and a suspicious number of debugging sessions. 😂💻

## ⭐ Thanks for Checking It Out!

Keep learning. Keep building.

```text
Guess → Calculate → Update → Repeat → Converge 🎯
```

### 🧮 Happy Calculating! ✨
