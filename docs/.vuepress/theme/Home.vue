<template>
  <div class="home">

    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
    </div>

    <h1>{{ data.featuresName }}</h1>

    <div class="features" v-if="data.features && data.features.length">
      
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <img v-if="feature.image" :src="$withBase(feature.image)" alt="hero">
        <p>{{ feature.details }}</p>
        
      </div>
    </div>

    <div class="subhero">
      <h1>{{ data.heroText || $title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
            <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>

    <Content custom/>

    <h1>{{ data.sponsorsName }}</h1>

    <div class="sponsors" v-if="data.sponsors && data.sponsors.length">
      
      <div class="sponsor" v-for="sponsor in data.sponsors">
        <h2>{{ sponsor.title }}</h2>
        <img v-if="sponsor.image" :src="$withBase(sponsor.image)" alt="hero">
        <p>{{ sponsor.details }}</p>
        
      </div>
    </div>

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  padding: $navbarHeight 2rem 0;
  // padding 0 auto 0
  max-width: 960px;
  margin: 0px auto;

  h1 {
    font-size: 3rem;
    margin: 0 auto;
    text-align: center;
  }

  .hero {
    text-align: center;

    img {
      align-items: center;
      // max-height 280px
      max-width: 100%;
      display: block;
      margin: 0rem auto;
    }

    h1 {
      font-size: 3rem;
      margin: 0 auto;
    }

    .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;

    img {
      align-items: center;
      max-width: 100%;
      display: block;
      margin: 0rem auto;
    }
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .subhero {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    text-align: center;

    img {
      // max-height 280px
      display: block;
      margin: 0rem auto;
    }

    h1 {
      font-size: 3rem;
      margin: 0 auto;
    }

    .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

    .sponsors {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;

    img {
      align-items: center;
      max-width: 100%;
      display: block;
      margin: 0rem auto;
    }
  }

  .sponsor {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
