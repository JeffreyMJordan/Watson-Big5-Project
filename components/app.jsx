import React from 'react';
import TextFormContainer from './text_form/text_form_container';
import Header from './header/header';
import AssessmentDisplayContainer from './assessment_display/assessment_display_container';
import ChartContainer from './chart/chart_container';

const App = () => (
  <div className="main">
    <Header />
    <TextFormContainer />
    <ChartContainer />

  </div>
);

export default App;