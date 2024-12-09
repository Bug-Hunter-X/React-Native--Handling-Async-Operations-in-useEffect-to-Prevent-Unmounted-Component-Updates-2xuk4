# React Native: Handling Async Operations in useEffect to Prevent Unmounted Component Updates

This repository demonstrates a common error in React Native when using the `useEffect` hook with asynchronous operations and provides a solution to prevent crashes caused by updating unmounted components.

## Problem
The `useEffect` hook's asynchronous operation might not complete before the component unmounts, leading to the error `Cannot update a component after it has been unmounted`. 

## Solution
The solution involves using a cleanup function within the `useEffect` hook to abort the asynchronous operation if the component unmounts before completion.  This prevents the error and ensures a more robust application.

## How to Run
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your device or emulator.