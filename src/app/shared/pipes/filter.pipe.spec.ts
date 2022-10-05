import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {
  const pipe = new FilterPipe;

  it('creates pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns correct faq when filtered', () => {
    expect(pipe.transform([
      { id: 1, question: 'One', answer: 'OneAnswer' },
      { id: 2, question: 'Two', answer: 'TwoAnswer' },
      { id: 3, question: 'Three', answer: 'ThreeAnswer' }
    ], 'Two')).toEqual([{ id: 2, question: 'Two', answer: 'TwoAnswer' }]);
  });

  it('returns correct faqs when multiple items match filter', () => {
    expect(pipe.transform([
      { id: 1, question: 'One', answer: 'OneAnswer' },
      { id: 2, question: 'Two', answer: 'TwoAnswer' },
      { id: 3, question: 'Three', answer: 'ThreeAnswer' }
    ], 'T')).toEqual([{ id: 2, question: 'Two', answer: 'TwoAnswer' },
    { id: 3, question: 'Three', answer: 'ThreeAnswer' }]);
  });

  it('returns empty array when no items are passed in', () => {
    expect(pipe.transform([], 'Two')).toEqual([]);
  });

  it('returns all items if no search text is passed in', () => {
    expect(pipe.transform([
      { id: 1, question: 'One', answer: 'OneAnswer' },
      { id: 2, question: 'Two', answer: 'TwoAnswer' },
      { id: 3, question: 'Three', answer: 'ThreeAnswer' }
    ], '')).toEqual([{ id: 1, question: 'One', answer: 'OneAnswer' },
    { id: 2, question: 'Two', answer: 'TwoAnswer' },
    { id: 3, question: 'Three', answer: 'ThreeAnswer' }]);
  });
});
