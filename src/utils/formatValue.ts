const formatValue = (value: number, type?: string): string => {
  switch (type) {
    case 'income':
      return Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);

    case 'outcome':
      return `- ${Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)}`;

    default:
      return Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
  }
};
export default formatValue;
