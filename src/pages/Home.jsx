import { BlockAndChainFeatures } from '../components/BlockAndChainFeatures';
import {Hero} from '../components/Hero'
import { Technology } from '../components/Technology';

export default function Home() {
  return <>
    <Hero/>
    <BlockAndChainFeatures/>
    <Technology/>
  </>;
}