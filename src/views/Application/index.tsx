import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Application as ApplicationType } from '../../@types/Application';
import Button from '../../components/Button';
import { useApps } from '../../hooks/useApps';

import {
  Container,
  Header,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoDetails,
} from './styles';

const Application: React.FC = function () {
  const { id } = useParams();
  const { getApplicationById } = useApps();
  const [application, setApplication] = useState<ApplicationType>();

  useEffect(() => {
    if (!id) return;

    setApplication(getApplicationById(id));
  }, [id]);

  return (
    <Container>
      <Header>
        <img src={application?.icon} alt={application?.name} />
        <HeaderInfo>
          <HeaderInfoTitle>
            <h1>{application?.name}</h1>
            <p>{application?.description}</p>
          </HeaderInfoTitle>
          <HeaderInfoDetails>
            <div>
              <strong>{application?.stars}</strong>
              <span>Estrelas</span>
            </div>
            <div>
              <strong>{application?.downloads}</strong>
              <span>Downloads</span>
            </div>
          </HeaderInfoDetails>
        </HeaderInfo>
        <Button>Baixar</Button>
      </Header>
    </Container>
  );
};

export default Application;
