import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../src/components/ui/toaster";
import { TooltipProvider } from "../src/components/ui/tooltip";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import WhyUs from "../src/pages/WhyUs";
import Insights from "../src/pages/Insights";
import Tools from "../src/pages/Tools";
import Services from "../src/pages/Services";
import Contact from "../src/pages/Contact";
import Admin from "../src/pages/Admin";
import NotFound from "../src/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/why-36x" component={WhyUs} />
        <Route path="/insights" component={Insights} />
        <Route path="/tools" component={Tools} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
