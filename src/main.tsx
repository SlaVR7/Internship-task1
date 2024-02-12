import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { MainPage } from './pages/MainPage.tsx';
import { ButtonPage } from './pages/ButtonPage.tsx';
import { FormPage } from './pages/FormPage.tsx';
import { App } from './App.tsx';
import { DatePage } from './pages/DatePage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/form" element={<FormPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
