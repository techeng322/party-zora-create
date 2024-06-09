import Input from '../Input';
import { useProvider } from '@/providers/Provider';

const InputGroup = () => {
  const { fundsRecipient, setFundsRecipient, factoryAddress, setFactoryAddress } = useProvider();

  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="party (base)"
        value={fundsRecipient}
        onChange={(e: any) => setFundsRecipient(e.target.value)}
      />
      <Input
        placeholder="zora factory (base)"
        value={factoryAddress}
        onChange={(e: any) => setFactoryAddress(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
