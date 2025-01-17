import getMaxExecutableTime from '@/lib/party/getMaxExecutableTime';
import { pad, toHex, concatHex, Address, zeroAddress } from 'viem';
import { ProposalType } from '@/lib/types/partyTypes';
import getZoraCreateProposalBytecode from './getZoraCreateProposalBytecode';

const getProposalData = (recipient: Address = zeroAddress) => {
  const encodedBytecodeProposalData = getZoraCreateProposalBytecode(recipient);
  const hexEncodedSelector = pad(toHex(ProposalType.ArbitraryCalls), {
    size: 4,
  });
  const proposalData = concatHex([hexEncodedSelector, encodedBytecodeProposalData as Address]);
  const proposalStruct: any = {
    cancelDelay: '0',
    maxExecutableTime: getMaxExecutableTime(),
    proposalData,
  };

  return proposalStruct;
};

export default getProposalData;
