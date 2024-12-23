import { Outlet } from 'react-router-dom';
import { MainPageLayout } from './MainPage.styled';
import { Panel, PanelGroup, PanelResizeHandle } from '@/shared';
import { Sidebar } from '@/widgets';

const MainPage = () => {
  return (
    <MainPageLayout>
      <PanelGroup autoSaveId="persistence" direction="horizontal">
        <Panel collapsedSize={5.5} collapsible defaultSize={40} minSize={12} maxSize={35}>
          <Sidebar />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={60} minSize={50}>
          <Outlet />
        </Panel>
      </PanelGroup>
    </MainPageLayout>
  );
};

export default MainPage;
