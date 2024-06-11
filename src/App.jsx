import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";

const App = () => {
  return (
    <PrimeReactProvider>
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl border-2 p-2 mt-4 bg-[#ffffff]">
        <div className="grid grid-cols-12 grid-rows-5 gap-4">
          <div className="col-span-12">
            <h1 className="text-3xl">Demo Grafana Faro - TDC</h1>
          </div>
          <div className="col-span-4 row-start-2">
            <Button label="Evento de Log" icon="pi pi-check" />
          </div>
          <div className="col-span-4 col-start-1 row-start-3">
            <Button label="Evento de Info" icon="pi pi-check" />
          </div>
          <div className="col-span-4 col-start-1 row-start-4">
            <Button label="Evento de Warn" icon="pi pi-check" />
          </div>

          <div className="col-span-8 row-span-2 col-start-5 row-start-2">
            resultado dos logs
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default App;
