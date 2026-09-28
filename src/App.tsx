import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Manege from "./pages/Manege";
import VgaSynth from "./pages/VgaSynth";
import TeachableMachine from "./pages/TeachableMachine";
import NotFound from "./pages/NotFound";

// Addresses used by the previous version of the site, kept so old links still work.
const oldRoutes: [string, string][] = [
  ["/day-1", "/manege"],
  ["/day-2", "/manege"],
  ["/day-3", "/manege"],
  ["/day-4", "/manege"],
  ["/day-5", "/manege"],
  ["/project-x", "/vga-synth"],
  ["/project-2/*", "/vga-synth"],
  ["/teachable-machine/*", "/teachable-machine"],
];

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/manege" element={<Manege />} />
      <Route path="/vga-synth" element={<VgaSynth />} />
      <Route path="/teachable-machine" element={<TeachableMachine />} />
      {oldRoutes.map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
