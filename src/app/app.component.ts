import { Component } from '@angular/core';
import { Affirmation } from './affirmation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wellness-Dashboard';
  affirmationList: Affirmation[] = [];

  constructor() {
    this.affirmationList = [
       new Affirmation(1, "Be kind. Everyone is still healing from things they don't speak about."),
       new Affirmation(2, "It's your story. Feel free to hit'em with a plot twist at any moment."),
       new Affirmation(3, "You have to be odd to be number one. - Dr. Seuss"),
       new Affirmation(4, "and if I asked you to name all the things that you love, how long would it take for you to name yourself? - breetheprincess"),
       new Affirmation(5, "Sunshine all the time makes a desert. - Arab proverb"),
       new Affirmation(6, "I am under no obligation to make sense to you."),
       new Affirmation(7, "The version of me you created in your mind is not my responsibility."),
       new Affirmation(8, "Be quick to listen. Be slow to speak."),
       new Affirmation(9, "But the thing is, even if I could go back, I wouldn't belong there anymore. - Ccz"),
       new Affirmation(10, "May your choices reflect your hopes, not your fears"),
       new Affirmation(11, "Your direction is more important than your speed."),
       new Affirmation(12, "Access to my energy is a privilege."),
       new Affirmation(13, "Forgive yourself for not knowing better at the time. Forgive yourself for giving away your power. Forgive yourself for past behaviors. Forgive yourself for the survival patterns and traits you picked up while enduring trauma. Forgive yourself for being who you needed to be."),
       new Affirmation(14, "Feel the feeling, but don't become the emotion. Witness it. Allow it. Release it."),
       new Affirmation(15, "These are the days that must happen to you. - Walt Whitman"),
       new Affirmation(16, "Taking care of yourself is productive."),
       new Affirmation(17, "When a woman says, 'I have nothing to wear!', what she really means is, 'There's nothing here for who I'm supposed to be today.'. - Caitlin Moran"),
       new Affirmation(18, "On the other side of fear lies freedom."),
       new Affirmation(19, "Courage, dear heart. - C.S. Lewis"),
       new Affirmation(20, "Stop the glorification of busy."),
       new Affirmation(21, "May your coffee be strong and your Monday be short."),
       new Affirmation(22, "What's comin' will come and we'll meet it when it does. - Hagrid"),
       new Affirmation(23, "With freedom, books, flowers, and the moon, who could not be happy? - Oscar Wilde"),
       new Affirmation(24, "You will become way less concerned with what people think of you when you realize how seldom they do. - David Foster Wallace (Infinite Jest)"),
       new Affirmation(25, "And now that you don't have to be perfect, you can be good. - John Steinbeck"),
       new Affirmation(26, "Have goals so big you get uncomfortable telling small minded people."),
       new Affirmation(27, "May you have the courage to break the patterns in your life that are no longer serving you."),
       new Affirmation(28, "Starve your distractions, feed your focus."),
       new Affirmation(29, "Yesterday is heavy, put it down."),
       new Affirmation(30, "Your life isn't yours if you always care what someone else thinks."),
       new Affirmation(31, "The moon reminds me 'You are still whole no matter what phase you're in'."),
    ];
 }

}
