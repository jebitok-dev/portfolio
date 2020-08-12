import styled from 'styled-components';
import { SideNav } from 'carbon-components-react/lib/components/UIShell'
import { NotificationNew16 } from '@carbon/icons-react';

export const StyledSideNav = styled(SideNav)`
    @media (max-width: 640px) {
        display: none; 
    }
`