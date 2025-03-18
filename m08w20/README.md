# M08W20 - Unit & Integration Testing

### To Do
- [ ] What is Unit & Integration testing?
- [ ] React and vite testing
- [ ] Jest vs Vitest
- [ ] Create app using vite
- [ ] Add testing setup and run tests
- [ ] Coverage

# 🧪 Testing in React with Vitest and Vite  

Welcome to this lecture on **Unit and Integration Testing in React** using **Vitest** and **Vite**. This guide will walk you through key concepts, tools, and setup instructions for writing tests in a **modern React project**.

---

## 📝 **1. What is Unit and Integration Testing?**  

### 🔹 **Unit Testing**  
Unit tests focus on testing **small, isolated parts** of the application, usually individual functions or components. The goal is to ensure that each **unit of code works as expected**.  

✅ Example: Testing a function that sorts an array of products.  

### 🔹 **Integration Testing**  
Integration tests check whether **multiple parts** of the application work correctly **together**. These tests focus on component interactions, API calls, and how different units integrate.  

✅ Example: Testing a button that sorts products and updates the UI correctly.

---

## ⚡ **2. CRA vs Vite for Testing**  

### **Create React App (CRA)**  
- Comes with **Jest** pre-configured for testing.  
- Can be slower due to **webpack** bundling.  
- Requires **additional setup** for ES modules.

### **Vite + Vitest**  
- Uses **ES modules** by default, making testing **faster**.  
- Supports **hot module replacement (HMR)** for quick re-runs.  
- Works seamlessly with **Vitest**, a Jest-compatible test runner.  

---

## 🛠️ **3. Tools for React Testing**  

| **Feature** | **Jest** | **Vitest** |
|------------|---------|-----------|
| Test runner | ✅ Yes | ✅ Yes |
| Fast execution | 🚫 No (slower in large apps) | ✅ Yes |
| ESM support | 🚫 No (requires Babel) | ✅ Yes (native) |
| Vite compatibility | 🚫 No | ✅ Yes |

| **Feature** | **react-testing-library** | **vitest-browser-react** |
|------------|------------------------|---------------------------|
| DOM testing utilities | ✅ Yes | ✅ Yes |
| Works with Jest | ✅ Yes | 🚫 No |
| Works with Vitest | ✅ Yes | ✅ Yes |
| Lightweight | ✅ Yes | ✅ Yes |

---

## 🚀 **4. Creating a Vite React App**  

### **Step 1: Create a Vite Project**  
```sh
npm create vite@latest my-app --template react
cd my-app
npm install
```

### **Step 2: Install Dependencies**  
```sh
npm install vitest vitest-browser-react webdriverio
```

### **Step 3: Configure Vitest**  
Create a `vitest.config.js` file at the root of your project:  

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
      // setup here
  }
});
```

---

## ✅ **5. Running Tests**  

### **Creating a Test File**  
To write tests, create a file with `.test.js` or `.spec.js` extension inside your `src/` directory.  

📌 Example: To test a function inside `utils/sort.js`, create a test file:  
```
src/utils/sort.test.js
```

For testing a React component in `src/components/Button.jsx`, create:  
```
src/components/Button.spec.jsx
```

### **Adding the Test Script**  
Ensure you have the test script in your `package.json`:  
```json
"scripts": {
  "test": "vitest",
}
```

### **Run all tests**  
```sh
npm test
```

---

## 🎯 **6. What is Test Coverage?**  
Test coverage measures **how much of your code** is tested. It helps identify untested parts of your application.  

Common coverage metrics:
- **Statements**: % of statements executed.
- **Branches**: % of conditional branches tested.
- **Functions**: % of functions executed.
- **Lines**: % of lines executed.

To ensure coverage works, add this to your `package.json`:  
```json
"scripts": {
  "test": "vitest",
  "coverage": "vitest --coverage"
}
```

Run the following command to generate a coverage report:  
```sh
npm run coverage
```

This creates a `/coverage` folder with a detailed **HTML report** you can open in your browser.

---

## 🎉 **Conclusion**  
- **Unit tests** verify individual functions/components.  
- **Integration tests** check if multiple parts work together.  
- **Vitest + Vite** is a modern, fast alternative to **Jest + CRA**.  
- **Test coverage** ensures all parts of your code are tested.  

Now you're ready to **test your React apps efficiently with Vite and Vitest**! 🚀
