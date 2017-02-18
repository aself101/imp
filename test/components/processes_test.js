import { renderComponent, expect } from '../test_helper';

import Introduction from '../../app/components/processes/introduction';

describe('Processes components', () => {
  it('Renders the introduction component', () => {
    renderComponent(Introduction);
  });
});
