export interface Feature {
  pass: string
  name: string
}

export interface Benchmark {
  name: string
  suite: string
  files: string[]
  featureValues: number[]
}

export interface Response {
  featureValues: number[]
  closestBenchs: Benchmark[]
  features: Feature[]
}
