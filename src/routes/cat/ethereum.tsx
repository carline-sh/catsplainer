import { createFileRoute, Link } from '@tanstack/react-router';
import { FaBackspace } from 'react-icons/fa';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/cat/ethereum')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="min-h-screen relative">
        <h2 className="font-dance text-5xl text-pink-500 text-shadow-lg text-shadow-pink-100 p-4 text-center">I AM THE ETHEREUM CAT! yeh</h2>
        <div className="w-full px-4 py-2">
          <div>
            <div className="text-sm text-gray-500 prose max-w-screen-md mx-auto">
              <BackButton />
              <p>Ethereum is a decentralized computer network that anyone can use to run programs or make transactions but instead of being controlled by a company (like Amazon or Google), it’s run by thousands of computers around the world.
                You can think of it as a worldwide computer that no single person or government controls. This is called decentralization.
                Its currency is called Ether (ETH), which you use to pay for using the network kind of like paying for electricity to power your code.

                Ethereum runs on blockchain technology the same kind Bitcoin uses, but with an important difference:</p>
              <ul>
                <li>Bitcoin’s blockchain only tracks who owns what.</li>
                <li>Ethereum’s blockchain also stores code called smart contracts.</li>
              </ul>
              <div className='w-full flex gap-4 items-center'>
                <img className="w-1/3 h-full object-cover" src="/cats/crown-cat-gif.webp" alt="crown cat" />
                <div className="w-2/3 flex flex-col">
                  <p>A smart contract is a self-executing program that runs on the Ethereum network.
                    It says: “If X happens, then do Y.”
                    For example; if Alice sends 1 ETH to this contract, give her a digital ticket.

                    These contracts are transparent (everyone can see the code) and can’t be changed once deployed.

                    Because of these smart contracts, Ethereum became the base for a lot of innovations:</p>
                  <ul>
                    <li>DeFi (Decentralized Finance) banking without banks (loans, savings, trading run by code).</li>
                    <li>NFTs which are digital collectibles or art verified on the blockchain.</li>
                    <li>DAOs decentralized organizations that make decisions via voting on the blockchain.</li>
                    <li>Gaming & metaverse projects digital economies using tokens and items that live on Ethereum.</li>
                  </ul>
                </div>
              </div>

              <p>Normally, you need to trust companies to keep their servers honest.
                Ethereum removes that by using consensus. All computers in the network must agree on what’s true.</p>

              <p>It switched to a system called Proof of Stake (PoS) in 2022.
                Instead of mining with energy, users stake ETH (lock it up) to help validate transactions and secure the network — and earn rewards for doing so.</p>

              <p>Ethereum isn’t just a cryptocurrency it’s more like an infrastructure for a new kind of internet:</p>

              <p>The “Web3” idea where apps, money, and identity are decentralized, open, and user-controlled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
