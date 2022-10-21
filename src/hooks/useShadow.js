export default function useShadow() {
  return ({ radius = 5, opacity = 0.2 }) => ({
    shadowColor: '#000',
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  });
}
