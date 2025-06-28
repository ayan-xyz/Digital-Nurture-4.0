using NUnit.Framework;
using CalcLibrary;

namespace calctests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void SetUp()
        {
            _calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            _calculator = null;
        }

        [TestCase(1, 2, 3)]
        [TestCase(5, 5, 10)]
        public void Add_ReturnsCorrectResult(int a, int b, int expected)
        {
            var result = _calculator.Add(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
