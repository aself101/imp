import { renderComponent, expect } from '../test_helper';

import AURATable from '../../app/components/policy/tables/aura_table';
import NotCoveredTable from '../../app/components/policy/tables/notCovered_table';
import Abbreviations from '../../app/components/policy/abbreviations';
import FormalManagement from '../../app/components/policy/formalMgmt';
import HowToUse from '../../app/components/policy/howToUse';
import InfoManagementTable from '../../app/components/policy/infoMgmtTable';
import InfoNotCovered from '../../app/components/policy/infoNotCovered';
import InfoTypeDefinitions from '../../app/components/policy/infoTypeDefinitions';
import Purpose from '../../app/components/policy/purpose';

describe('Policy components', () => {

  it('Renders the AURA table component', () => {
    renderComponent(AURATable);
  });
  it('Renders the NOT covered table component', () => {
    renderComponent(NotCoveredTable);
  });
  it('Renders the abbreviations table component', () => {
    renderComponent(Abbreviations);
  });
  it('Renders the formal management component', () => {
    renderComponent(FormalManagement);
  });
  it('Renders the how to use component', () => {
    renderComponent(HowToUse);
  });
  it('Renders the information management table component', () => {
    renderComponent(InfoManagementTable);
  });
  it('Renders the information not covered component', () => {
    renderComponent(InfoNotCovered);
  });
  it('Renders the information type definitions component', () => {
    renderComponent(InfoTypeDefinitions);
  });
  it('Renders the purpose component', () => {
    const component = renderComponent(Purpose);
    const isPurpose = 'The purpose of this policy is to ensure formal management of information at Gemini using specific locations for storage and retrieval.';

    expect(component).to.contain(isPurpose);
  });

});
