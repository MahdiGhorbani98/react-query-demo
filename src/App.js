import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroes from "./components/SuperHeroes.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHero } from "./components/RQSuperHero";
import { RQParallel } from "./components/RQParallel";
import { DynamicParallelQuery } from "./components/DynamicParallelQuery";
import { PaginatedQueries } from "./components/PaginatedQueries";
import { InfinteQueries } from "./components/InfinteQueries";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes </Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">Rq Super Heroes </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallelQuery heroId={[1, 3]} />}
          />
          <Route path="/infinte-queries" element={<InfinteQueries />} />
          <Route path="/paginated-queries" element={<PaginatedQueries />} />
          <Route path="/rq-parallel" element={<RQParallel />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
