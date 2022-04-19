import { Layout } from "@shopify/polaris";
import { ResultMappingForm } from "./ResultMappingForm.js";

export const CreateResultMappings = ({ currentResults, currentQuiz }) => {
  const unmappedCurrentResults = currentResults.filter(
    (r) => r.answers.edges.length === 0
  );
  return (
    <Layout.Section>
      <Layout.Section>
        {currentResults &&
          unmappedCurrentResults.map((r, i) => {
            return (
              <ResultMappingForm
                key={i}
                quizResult={r}
                _id={r._id}
                quiz={currentQuiz}
              />
            );
          })}
        <br />
      </Layout.Section>
    </Layout.Section>
  );
};