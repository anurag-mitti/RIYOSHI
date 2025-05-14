
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const requestsPerSecData = [
  { name: 'CppServer', value: 187000, color: 'hsl(var(--primary))' },
  { name: 'NodeJS', value: 43000, color: '#68A063' },
  { name: 'Golang', value: 112000, color: '#00ADD8' },
  { name: 'Python', value: 18000, color: '#3776AB' },
  { name: 'Rust', value: 134000, color: '#DEA584' },
];

const latencyData = [
  { name: 'CppServer', value: 0.26, color: 'hsl(var(--primary))' },
  { name: 'NodeJS', value: 1.24, color: '#68A063' },
  { name: 'Golang', value: 0.42, color: '#00ADD8' },
  { name: 'Python', value: 2.85, color: '#3776AB' },
  { name: 'Rust', value: 0.38, color: '#DEA584' },
];

const concurrencyData = [
  { name: '100', cppserver: 0.3, nodejs: 0.5, golang: 0.4, python: 0.9, rust: 0.35 },
  { name: '1k', cppserver: 0.35, nodejs: 1.2, golang: 0.6, python: 2.1, rust: 0.45 },
  { name: '5k', cppserver: 0.4, nodejs: 3.5, golang: 1.2, python: 4.8, rust: 0.8 },
  { name: '10k', cppserver: 0.55, nodejs: 7.2, golang: 1.9, python: 9.5, rust: 1.3 },
  { name: '50k', cppserver: 0.75, nodejs: 12.6, golang: 3.5, python: 15.2, rust: 2.2 },
  { name: '100k', cppserver: 1.1, nodejs: 18.4, golang: 5.8, python: 22.7, rust: 3.8 },
];

const Benchmarks = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Benchmarks</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            CppServer outperforms other popular frameworks in standard benchmarks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Requests per Second</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={requestsPerSecData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" />
                  <YAxis
                    label={{ 
                      value: 'Requests/sec', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value.toLocaleString()} req/s`, 'Throughput']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar dataKey="value" fill="url(#colorValue)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-foreground/70 mt-4">
              Higher is better. Tested with 8-core CPU, 16GB RAM on HTTP GET requests.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Average Latency (ms)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={latencyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" />
                  <YAxis
                    label={{ 
                      value: 'Milliseconds', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value} ms`, 'Latency']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar dataKey="value" fill="url(#colorLatency)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-foreground/70 mt-4">
              Lower is better. Average response time for a simple JSON response.
            </p>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Latency Under Concurrency</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={concurrencyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="name" 
                    label={{ 
                      value: 'Concurrent Connections', 
                      position: 'insideBottomRight', 
                      offset: -10,
                      style: { textAnchor: 'end' }
                    }} 
                  />
                  <YAxis
                    label={{ 
                      value: 'Response Time (ms)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }}
                  />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                  <Legend />
                  <Line type="monotone" dataKey="cppserver" name="CppServer" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="nodejs" name="NodeJS" stroke="#68A063" />
                  <Line type="monotone" dataKey="golang" name="Golang" stroke="#00ADD8" />
                  <Line type="monotone" dataKey="python" name="Python" stroke="#3776AB" />
                  <Line type="monotone" dataKey="rust" name="Rust" stroke="#DEA584" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-foreground/70 mt-4">
              Lower is better. Showing average response time (ms) as concurrent connections increase.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            * All benchmarks were performed on equivalent hardware using wrk2 with the same workload patterns.
          </p>
          <a href="#" className="text-primary hover:underline">
            View detailed methodology and results
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;
