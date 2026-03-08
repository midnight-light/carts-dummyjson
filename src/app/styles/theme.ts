export interface CustomTheme {
  colors: {
    white: string;
    primary: {
      base: string;
    };
    bg: {
      base: string;
    };
    fg: {
      base: string;
      inverted: string;
    };
    border: {
      base: string;
    };
    secondary: {
      base: string;
    };
    error: {
      base: string;
    };
    warning: {
      base: string;
    };
    success: {
      base: string;
    };
    info: {
      base: string;
    };
    text: {
      label: string;
      subtitle: string;
      help: string;
      success: string;
    };
  };
  typography: {
    families: {
      sansSerif: string;
      serif: string;
      monospace: string;
    };
    weights: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  gap: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export const lightTheme: CustomTheme = {
  colors: {
    white: '#ffffff',
    primary: {
      base: '#537cf4',
    },
    bg: {
      base: '#f7f9ff',
    },
    fg: {
      base: '#121827',
      inverted: '#f7f9ff',
    },
    border: {
      base: '#e0e0e0',
    },
    secondary: {
      base: '#e55b45',
    },
    error: {
      base: '#E04355',
    },
    warning: {
      base: '#FF7F44',
    },
    success: {
      base: '#5AC189',
    },
    info: {
      base: '#66BCFE',
    },
    text: {
      label: '#121827',
      subtitle: '#2e4676',
      help: '#737373',
      success: '#5AC189',
    },
  },

  typography: {
    families: {
      sansSerif: '"Inter", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      monospace: '"Fira Code", "Courier New", monospace',
    },
    weights: {
      light: 200,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 21,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 72,
  },
  gap: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 72,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  breakpoints: {
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1440,
    xxl: 1920,
  },
};
