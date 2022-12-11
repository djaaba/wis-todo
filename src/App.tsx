import {observer} from 'mobx-react-lite';
import styled from 'styled-components';

import { Button } from './components';
import taskStore from './store/store';
import { getId } from './utils';

const H1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: var(--black);
  margin: 15px;
`;

const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList = styled.ul`
  width: 100%;
`;

const Task = styled.li`
  background: var(--light-gray);
  margin: 20px 0;
  padding: 20px;
`;

const App = (...props: any) => {

  return (
    <>
      <Wrapper>
        <H1>Tasks List</H1>
        <Container>
          <Button onClick={() => (taskStore.selectedTab = 'all')}>All</Button>
          <Button onClick={() => (taskStore.selectedTab = 'opened')}>Opened</Button>
          <Button onClick={() => (taskStore.selectedTab = 'closed')}>Closed</Button>
        </Container>
          <TaskList>
          { 
            taskStore.sortedTasks.map(el => 
            <Task key={getId()}>
              {/* <input type="checkbox" checked={el.completed} /> */}
              <p>
                {el.title}
              </p>
            </Task>)
          }
          </TaskList>
      </Wrapper>
    </>
  );
};

export const AppHOC = observer(App);